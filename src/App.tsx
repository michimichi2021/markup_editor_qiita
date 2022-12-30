import './App.css';
import { useState } from 'react';
import {marked} from "marked";
import sanitizeHtml from 'sanitize-html';


function App() {
  const [markdown, setMarkdown] = useState('');
  const markedText = sanitizeHtml(markdown, {
    allowedTags: [],
    disallowedTagsMode: 'recursiveEscape',
  });

  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const htmlText = marked.parse(markedText);


  return (
    <>
      <div>
        <form>
          <label>
            メッセージ
          </label><br/>
          <textarea name="name" rows={10} cols={40} onChange={(e) => setMarkdown(e.target.value)}/>
        </form>
      </div>
      <div>
        <p>プレビュー</p>
        <div className='bg-gray-200 p-3 text-sm w-full prose prose-sm'>
          <div dangerouslySetInnerHTML={{ __html: htmlText }} className='w-3/4' />
        </div>
      </div>
    </>
  );
}

export default App;
