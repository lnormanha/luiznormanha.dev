import { type Command,commands } from "./terminalCommands";

// Use more descriptive names and appropriate types
let terminalContentElement: HTMLDivElement | null = null;
let cursorBlinkInterval: NodeJS.Timeout | null = null;
let activeTimeouts: NodeJS.Timeout[] = [];
let initializationDebounceTimer: NodeJS.Timeout | null = null;

function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function resetTerminal() {
  if (terminalContentElement) {
    terminalContentElement.innerHTML = "";
    terminalContentElement = null;
  }
  if (cursorBlinkInterval !== null) {
    clearInterval(cursorBlinkInterval);
    cursorBlinkInterval = null;
  }
  // Clear all active timeouts
  activeTimeouts.forEach(clearTimeout);
  activeTimeouts = [];
  // Clear initialization debounce timer
  if (initializationDebounceTimer !== null) {
    clearTimeout(initializationDebounceTimer);
    initializationDebounceTimer = null;
  }
}
function initializeTerminalLogic(lang: string) {
  resetTerminal();

  terminalContentElement = document.getElementById(
    "terminal-content",
  ) as HTMLDivElement | null;

  if (!terminalContentElement) {
    console.error("Terminal content element not found");
    return;
  }

  let currentCommandIndex = 0;

  function createTextNode(text: string): Text {
    return document.createTextNode(text);
  }

  function createSpan(text: string, className?: string): HTMLSpanElement {
    const span = document.createElement("span");
    span.textContent = text;
    if (className) span.className = className;
    return span;
  }

  function appendToTerminal(...nodes: (Node | string)[]) {
    if (!terminalContentElement) return; // Add this line
    nodes.forEach((node) => {
      if (typeof node === "string") {
        terminalContentElement?.appendChild(createTextNode(node));
      } else {
        terminalContentElement?.appendChild(node);
      }
    });
    terminalContentElement.scrollTop = terminalContentElement.scrollHeight;
  }

  function createCursor(): HTMLSpanElement {
    return createSpan("|", "text-white cursor");
  }

  function updateCursor() {
    const oldCursor = terminalContentElement?.querySelector(".cursor");
    if (oldCursor) oldCursor.remove();
    appendToTerminal(createCursor());
  }

  async function typeText(text: string, delay: number): Promise<void> {
    for (const char of text) {
      appendToTerminal(char);
      updateCursor();

      await new Promise<void>((resolve) => {
        const timeoutId = setTimeout(resolve, delay);
        activeTimeouts.push(timeoutId);
      });
    }
  }

  async function typeCommand(command: string | undefined): Promise<void> {
    if (!command) return;
    await typeText(command, 50);
    appendToTerminal("\n");
  }

  async function showOutput(output: string): Promise<void> {
    const lines = output.split("\n");
    for (const line of lines) {
      await typeText(line, 20);
      appendToTerminal("\n");
    }
  }

  async function showPrompt(): Promise<void> {
    appendToTerminal(createSpan("$ ", "text-yellow-400"));
    updateCursor();

    const currentCommands = commands[lang] || commands["en"];
    if (currentCommandIndex >= currentCommands.length) {
      return;
    }

    const { command, output } = currentCommands[currentCommandIndex];

    if (command) {
      await typeCommand(command);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    await showOutput(output);
    currentCommandIndex++;

    if (currentCommandIndex < currentCommands.length) {
      const timeoutId = setTimeout(showPrompt, 500);
      activeTimeouts.push(timeoutId);
    }
  }

  // Clear existing content
  terminalContentElement.innerHTML = "";
  currentCommandIndex = 0;

  // Start the terminal
  showPrompt();

  // Set up cursor blinking
  cursorBlinkInterval = setInterval(() => {
    const cursor = terminalContentElement?.querySelector(".cursor");
    if (cursor) {
      cursor.classList.toggle("opacity-0");
    }
  }, 500);
}

export const initializeTerminal = debounce(initializeTerminalLogic, 1000);
