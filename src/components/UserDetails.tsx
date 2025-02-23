import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function UserDetails() {
  const user = useSelector((state: RootState) => state.users.selectedUser);

  if (!user) return <div className="flex-1 p-4">Select a user</div>;

  const totalStoredGptResults =
    user.storedGpt?.reduce((sum, gpt) => {
      return sum + (Array.isArray(gpt.result) ? gpt.result?.length : 0);
    }, 0) || 0;

  const data = {
    labels: [
      'Folder',
      'Article',
      'Bookmark',
      'Favorite',
      'StoredGpt',
      'No of Uploads',
      'No of Links',
      'No of times Incognito is Used',
      'No of times ChatGpt is Used',
      'No of times Translator is Used',
      'No of times OCR is Used',
    ],
    datasets: [
      {
        data: [
          user.folders?.length || 0,
          user.articles?.length || 0,
          user.bookmarks?.length || 0,
          user.favorite?.length || 0,
          totalStoredGptResults,
          user.tracking.numberOfUploads || 0,
          user.tracking.numberOfLinks || 0,
          user.tracking.noOfTimesIncognitoIsUsed || 0,
          user.tracking.noOfTimesChatGptIsUsed || 0,
          user.tracking.noOfTimesTranslatorIsUsed || 0,
          user.tracking.noOfTimesOCRIsUsed || 0,
        ],

        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#C9CBCF',
          'teal',
          'black',
          'magenta',
          'cyan',
        ],
      },
    ],
  };

  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">{user.name}'s Activity</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold">Summary</h3>
          <ul>
            <li>Folders: {user.folders?.length || 0}</li>
            <li>Articles: {user.articles?.length || 0}</li>
            <li>Bookmarks: {user.bookmarks?.length || 0}</li>
            <li>Favorites: {user.favorite?.length || 0}</li>
            <li>
              Stored Gpt:{' '}
              {user.storedGpt?.reduce(
                (sum, gpt) => sum + (gpt.result?.length || 0),
                0
              ) || 0}
            </li>
            <li>No of Uploads: {user.tracking.numberOfUploads || 0}</li>
            <li>No of Links: {user.tracking.numberOfLinks || 0}</li>
            <li>
              No. of Incognito Used:{' '}
              {user.tracking.noOfTimesIncognitoIsUsed || 0}
            </li>
            <li>
              No of Times ChatGptIsUsed:{' '}
              {user.tracking.noOfTimesChatGptIsUsed || 0}
            </li>
            <li>
              No of Times Translator Is Used:{' '}
              {user.tracking.noOfTimesTranslatorIsUsed || 0}
            </li>
            <li>
              No of Times OCR is Used: {user.tracking.noOfTimesOCRIsUsed || 0}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Activity Distribution</h3>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}
