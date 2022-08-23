import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const OnProgress = () => {
  const { t } = useTranslation(["contact"]);

  const originalArrow = <ArrowBackIosNewIcon />;
  const updatedArrow = `${t("arrow")}`;
  const [arrow, setArrow] = useState(originalArrow);

  return (
    <>
    <div className="on-progress-bg slideUp">
      <Link to="/" className="arrow-back slideUp">
        <span
          to="/" 
          onMouseOver={() => setArrow(updatedArrow)}
          onMouseLeave={() => setArrow(originalArrow)}
        > 
          {arrow}
        </span>
      </Link>
      <span>
        <h1 className="msg">
          {t("msg.msg-1")} <br />
          {t("msg.msg-2")}
        </h1>
      </span>
    </div>
    </>
  )
};

export default OnProgress;