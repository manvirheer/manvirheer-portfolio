// app/yvr/page.tsx
import YVRExplorerProposal from './sections/YVRExplorerProposal';
import YVRLayout from '../components/layout/yvr/layout';

export default function YVRPage() {
  return (
    <YVRLayout>
      <YVRExplorerProposal />
    </YVRLayout>
  );
}