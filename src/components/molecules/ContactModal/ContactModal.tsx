import "./ContactModal.css";
import { X } from "@phosphor-icons/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose(): void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(String(values.email))) {
      alert("Your email must be valid");
      return;
    }

    const resendBody = {
      // from: `${values.name} <${values.email}>`,
      from: `luiznormanha.dev - ${values.name} <onboarding@resend.dev>`,
      to: "luiznormanha@gmail.com",
      subject: values.subject,
      html: `<h2> Novo contato de luiznormanha.dev.</h5>
      </br>
      <h5>Mensagem:</h5>
      </br>
      <p>${values.message}</p>`,
    };

    const emailResponse = await fetch("http://localhost:3000/send-email.json", {
      method: "POST",
      body: JSON.stringify(resendBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (emailResponse.status === 200) {
      alert("Email enviado com sucesso!");
    }
  };

  return (
    <div className="modal-overlay" aria-hidden={Boolean(!isOpen)}>
      <div className="modal" aria-hidden={Boolean(!isOpen)}>
        <div className="modal-header">
          <h5>Contato</h5>
          <button onClick={onClose}>
            <X size={32} weight="bold" color="var(--gray-0)" />
          </button>
        </div>
        <p>
          Possuí alguma oportunidade para conversar ou um projeto que precise
          ser desenvolvido? Ou está interessado apenas em trocar uma idea sobre
          desenvolvimento?
        </p>
        <p>Me envie uma mensagem e vamos conversar!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className="input-container">
            <label>Nome / Empresa</label>
            <input type="text" name="name" />
          </div>

          <div className="input-container">
            <label>Assunto</label>
            <input type="text" name="subject" />
          </div>

          <div className="input-container">
            <label>Mensagem</label>
            <textarea name="message" />
          </div>

          <div className="button-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
