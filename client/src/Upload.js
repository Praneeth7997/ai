import React, { useState } from 'react';
export default function Upload({ token }) {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('document', file);
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token },
      body: form
    });
    const data = await res.json();
    setResult(data.result || data.error);
  };
  return (
    <form onSubmit={submit}>
      <h2>Upload Document</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Analyze</button>
      <div>{result}</div>
    </form>
  );
}