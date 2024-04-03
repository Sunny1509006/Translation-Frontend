import React, { useState } from 'react';

const TranslationPanel = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [fromLanguage, setFromLanguage] = useState('en');
    const [toLanguage, setToLanguage] = useState('bn');

    const translateText = async () => {
        try {
            const apiUrl = fromLanguage === 'en'
                ? 'http://165.232.184.61:5000/bangla'
                : 'http://165.232.184.61:5000/english';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: text
                })
            });
            const data = await response.json();
            setTranslatedText(data.result);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
                rows={4}
                cols={50}
            />
            <div>
                <label>Translate from:</label>
                <select
                    value={fromLanguage}
                    onChange={(e) => setFromLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="bn">Bangla</option>
                </select>
            </div>
            <div>
                <label>Translate to:</label>
                <select
                    value={toLanguage}
                    onChange={(e) => setToLanguage(e.target.value)}
                >
                    <option value="bn">Bangla</option>
                    <option value="en">English</option>
                </select>
            </div>
            <button onClick={translateText}>Translate</button>
            <div>
                <h3>Translated Text:</h3>
                <p>{translatedText}</p>
            </div>
        </div>
    );
};

export default TranslationPanel;
