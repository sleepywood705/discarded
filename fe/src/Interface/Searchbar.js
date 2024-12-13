import './Searchbar.scss'
import { useNavigate } from 'react-router-dom';


export function Searchbar() {
  const navigate = useNavigate();
  const handleBack = () => { navigate(-1) };
  const handleForward = () => { navigate(1) };

  return (
    <div id="Searchbar">
      <button className="Left" onClick={handleBack} />
      <button className="Right" onClick={handleForward} />
      <div className="URLbar"></div>
    </div>
  );
};