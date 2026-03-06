import { useState } from "react";
import { toast } from "sonner";

const painRegions = ["Cervical", "Ombros", "Lombar", "Quadril", "Joelho"];
const painDuration = ["Há uma semana", "Mais que 1 mês", "Menos que 3 meses", "Mais que 1 ano"];
const symptoms = ["Sim", "Não", "Estou em dúvida"];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [regions, setRegions] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [symptom, setSymptom] = useState("");
  const [description, setDescription] = useState("");

  const toggleRegion = (region: string) => {
    setRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, venho através do site.%0A%0ANome: ${name}%0ATelefone: ${phone}%0ARegiões com dor: ${regions.join(", ")}%0ATempo de dor: ${duration}%0AFormigamento/dormência: ${symptom}%0ADescrição: ${description}`;
    window.open("https://typebot.co/bpip-edu-blumenau", "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section className="py-16 px-4 bg-muted relative">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 fill-muted">
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Agende sua Avaliação</h2>
        <p className="text-muted-foreground mb-8">entraremos em contato assim que possível:</p>

        <form onSubmit={handleSubmit} className="text-left space-y-6">
          <div>
            <label className="block font-bold text-foreground mb-1">Nome Completo: *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground"
            />
          </div>

          <div>
            <label className="block font-bold text-foreground mb-1">Telefone/WhatsApp (com DDD): *</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu telefone/whatsapp com DDD"
              className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground"
            />
          </div>

          <div>
            <label className="block font-bold text-foreground mb-2">
              Marque uma ou mais regiões que sente dor:
            </label>
            <div className="flex flex-wrap gap-4">
              {painRegions.map((region) => (
                <label key={region} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={regions.includes(region)}
                    onChange={() => toggleRegion(region)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-foreground">{region}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-foreground mb-2">
              Há quanto tempo está sentindo dor?
            </label>
            <div className="flex flex-wrap gap-4">
              {painDuration.map((d) => (
                <label key={d} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    value={d}
                    checked={duration === d}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-foreground">{d}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-foreground mb-2">
              Além da dor sente formigamento, dormência ou falta de força?
            </label>
            <div className="flex flex-wrap gap-4">
              {symptoms.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="symptom"
                    value={s}
                    checked={symptom === s}
                    onChange={(e) => setSymptom(e.target.value)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-foreground">{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-foreground mb-1">
              Se desejar descrever seu caso neste momento, retornaremos melhores detalhes.
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-border rounded-md px-4 py-3 bg-background text-foreground"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-md text-lg hover:opacity-90 transition-opacity"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
