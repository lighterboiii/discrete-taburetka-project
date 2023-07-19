import { FC, useEffect, useState } from "react";
import st from './around.module.css';
import { YMaps, Map, Placemark, SearchControl, GeolocationControl, ZoomControl } from '@pbe/react-yandex-maps';

export const AroundPage: FC = () => {
  const [location, setLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className={st.container}>
      <YMaps>
        {location ? (
          <Map
            style={{ width: '100%', height: '363px' }}
            defaultState={{ center: location, zoom: 14 }}
          >
            <SearchControl 
            options={{ provider: 'yandex#search', placeholderContent: 'Поиск' }}
            // onLoad={(searchControl) => {
            //   searchControl.search('рестораны и кафе');
            // }} 
            />
            <GeolocationControl options={{ float: 'right' }} />
            <ZoomControl options={{ position: { right: 10, top: 100 }, size: 'auto' }} />
            <Placemark geometry={location} />
          </Map>
        ) : (
          <div>Получение данных о местоположении</div>
        )}
      </YMaps>
      <ul className={st.ul}>
        <li className={st.listItem}><span className={st.span}>Исследуйте город</span> в поисках интересующего вас заведения</li>
        <li className={st.listItem}><span className={st.span}>Забронируйте столик</span> или закажите доставку прямо в приложении</li>
        <li className={st.listItem}><span className={st.span}>Оставляйте отзывы</span> и зарабатывайте баллы</li>
      </ul>
    </div>
  )
};