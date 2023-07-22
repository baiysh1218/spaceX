import React, { FC, useState, useEffect } from "react";
import { LaunchType } from "../../../types/launches";
import { useParams } from "react-router-dom";

import "./LaunchesDetails.css";

// Определяем тип пропсов компонента
type LaunchPropsDetailsType = {
  launches: LaunchType[] | null; // Массив данных о запусках (или null, если данных нет)
};

// Компонент LaunchesDetails - компонент деталей одного запуска
const LaunchesDetails: FC<LaunchPropsDetailsType> = ({ launches }) => {
  // Создаем состояние для хранения информации о выбранном запуске (или null, если запуск не найден)
  const [oneLaunch, setOneLaunch] = useState<LaunchType | null>(null);

  // Получаем параметр "id" из URL с помощью хука useParams() из react-router-dom
  const { id } = useParams<{ id: string }>(); // Уточняем тип значения id как string

  // Эффект, который выполняется при изменении данных о запусках или значения id
  useEffect(() => {
    // Проверяем, есть ли данные о запусках и id не является пустым
    if (launches && id) {
      // Ищем запуск с соответствующим номером полета (flight_number) в массиве данных о запусках
      const filteredLaunch = launches.find(
        launch => launch.flight_number === +id
      ); // Обратите внимание на "+id", это преобразование id из строки в число
      // Обновляем состояние oneLaunch с найденным запуском или null, если запуск не найден
      setOneLaunch(filteredLaunch || null);
    }
  }, [launches, id]);

  // Возвращаем разметку компонента
  return (
    <div>
      {oneLaunch ? ( // Если есть данные о запуске (oneLaunch не равно null)
        <div className="details_launch">
          <h2>{oneLaunch.mission_name}</h2>
          <img src={oneLaunch.links.mission_patch} alt="" />
          <div className="details_launch_img_backdrop" />
          <div className="details_launch_content">
            <p>{oneLaunch.details}</p>
            <p>Date: {oneLaunch.launch_date_local}</p>
          </div>
        </div>
      ) : (
        // Если данных о запуске нет (oneLaunch равно null)
        <div>No launch data available.</div>
      )}
    </div>
  );
};

export default LaunchesDetails;
