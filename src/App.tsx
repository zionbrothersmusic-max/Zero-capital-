import { BLOGGER_PREVIEW_HTML } from './bloggerTemplate';

export default function App() {
  return (
    <div dangerouslySetInnerHTML={{ __html: BLOGGER_PREVIEW_HTML }} />
  );
}
