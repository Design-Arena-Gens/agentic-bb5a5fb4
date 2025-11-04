"use client";

import { useState } from 'react';

export default function HomePage() {
  const [input, setInput] = useState('Ol?! Escreva algo e enviaremos para a API.');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendEcho(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await fetch('/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      if (!res.ok) throw new Error('Falha ao chamar API');
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ maxWidth: 900, width: '100%', display: 'grid', gap: 24 }}>
        <header>
          <h1 style={{ fontSize: 32, margin: 0 }}>O que ? poss?vel fazer aqui?</h1>
          <p style={{ opacity: 0.8, marginTop: 8 }}>
            Voc? pode criar e publicar apps web com Next.js no Vercel. Inclui p?ginas, APIs
            serverless, chamadas de dados, e UI interativa ? tudo pronto para deploy.
          </p>
        </header>

        <section style={{ display: 'grid', gap: 12 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>Exemplos r?pidos</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>Construir landing pages e dashboards</li>
            <li>Criar rotas de API para l?gica serverless (ex.: processar formul?rios)</li>
            <li>Consumir APIs externas e renderizar dados</li>
            <li>Deploy autom?tico para produ??o na Vercel</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: 12 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>Teste uma API agora</h2>
          <form onSubmit={sendEcho} style={{ display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite uma mensagem"
              style={{ flex: 1, padding: '10px 12px', borderRadius: 8, border: '1px solid #444' }}
            />
            <button type="submit" disabled={loading} style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #444', cursor: 'pointer' }}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {error && (
            <div style={{ color: 'crimson' }}>Erro: {error}</div>
          )}
          {response && (
            <pre style={{ whiteSpace: 'pre-wrap', background: 'rgba(127,127,127,0.1)', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
{JSON.stringify(response, null, 2)}
            </pre>
          )}
        </section>

        <footer style={{ opacity: 0.7 }}>
          <small>
            Deploy alvo: https://agentic-bb5a5fb4.vercel.app
          </small>
        </footer>
      </div>
    </main>
  );
}
