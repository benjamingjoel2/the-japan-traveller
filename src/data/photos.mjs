// Photo registry. Every photo is licensed (Unsplash License) and recorded here
// with photographer, source page and where it was taken. Per the booster brief
// no credit line is shown on the site, but this file is the credits record.
// Rules: landscapes, architecture, food and trains only. No identifiable people.
import fujiChureito from '../assets/photos/fuji-chureito-pagoda.jpg';
import shirakawagoValley from '../assets/photos/shirakawago-valley.jpg';
import meguroBlossom from '../assets/photos/meguro-river-blossom.jpg';
import fujiBlossom from '../assets/photos/fuji-blossom-frame.jpg';
import autumnMaple from '../assets/photos/autumn-maple.jpg';
import shinkansenStation from '../assets/photos/shinkansen-tokyo-station.jpg';
import shinkansenMotion from '../assets/photos/shinkansen-fuji-motion.jpg';
import trainsFuji from '../assets/photos/trains-fuji-fujinomiya.jpg';
import ryokanRoom from '../assets/photos/ryokan-room-shuzenji.jpg';
import onsenNozawa from '../assets/photos/onsen-nozawa.jpg';
import kumano from '../assets/photos/kumano-daimonzaka.jpg';
import kamikochi from '../assets/photos/kamikochi-valley.jpg';
import shirakawagoSnow from '../assets/photos/shirakawago-snow.jpg';
import kyotoPagoda from '../assets/photos/kyoto-pagoda-pond.jpg';
import kaiseki from '../assets/photos/kaiseki-tokyo.jpg';
import okinawa from '../assets/photos/okinawa-uruma-coast.jpg';
import daigoji from '../assets/photos/daigoji-kyoto.jpg';

const U = 'Unsplash License';
export const PHOTOS = {
  'fuji-chureito': { src: fujiChureito, alt: 'Chureito Pagoda with Mount Fuji behind it', caption: 'Chureito Pagoda and Mount Fuji, Fujiyoshida', credit: 'David Edelstein', url: 'https://unsplash.com/photos/N4DbvTUDikw', licence: U },
  'shirakawago-valley': { src: shirakawagoValley, alt: 'Thatched farmhouses and rice paddies in a mountain valley', caption: 'Shirakawa-go, Gifu', credit: 'Rap Dela Rea', url: 'https://unsplash.com/photos/aA4oeWs5HrY', licence: U },
  'meguro-blossom': { src: meguroBlossom, alt: 'Cherry blossom arching over a canal lit at night', caption: 'Cherry blossom on the Meguro River, Tokyo', credit: 'Sora Sagano', url: 'https://unsplash.com/photos/8sOZJ8JF0S8', licence: U },
  'fuji-blossom': { src: fujiBlossom, alt: 'Snow-capped Mount Fuji framed by cherry blossom', caption: 'Mount Fuji', credit: 'JJ Ying', url: 'https://unsplash.com/photos/9Qwbfa_RM94', licence: U },
  'autumn-maple': { src: autumnMaple, alt: 'Orange autumn leaves beside a lake', caption: 'Autumn colour, Showa Kinen Park, Tachikawa', credit: 'Lyndon Li', url: 'https://unsplash.com/photos/zrT1tjnxJKQ', licence: U },
  'shinkansen-station': { src: shinkansenStation, alt: 'A white Shinkansen train at a station platform', caption: 'Shinkansen at Tokyo Station', credit: 'Fikri Rasyid', url: 'https://unsplash.com/photos/3ba59K57wE4', licence: U },
  'shinkansen-motion': { src: shinkansenMotion, alt: 'A Shinkansen passing at speed, blurred', caption: 'Shinkansen near Fuji, Shizuoka', credit: 'Spenser Sembrat', url: 'https://unsplash.com/photos/9H6ZPRr7j6Q', licence: U },
  'trains-fuji': { src: trainsFuji, alt: 'Blue local trains on tracks with Mount Fuji behind', caption: 'Trains below Mount Fuji, Fujinomiya', credit: 'wei', url: 'https://unsplash.com/photos/dlD6CdOgVc0', licence: U },
  'ryokan-room': { src: ryokanRoom, alt: 'Tatami guest room with a low table and floor chairs', caption: 'Ryokan guest room, Shuzenji Onsen, Izu', credit: 'Susann Schuster', url: 'https://unsplash.com/photos/aBv1DziNn4Y', licence: U },
  'onsen-nozawa': { src: onsenNozawa, alt: 'Steaming hot-spring pool with wooden signs in a village', caption: 'Ogama hot-spring source, Nozawa Onsen, Nagano', credit: 'waa towaw', url: 'https://unsplash.com/photos/YO-GaKXYlgw', licence: U },
  'kumano': { src: kumano, alt: 'Moss-covered stone steps climbing through a cedar forest', caption: 'Daimon-zaka, Kumano Kodo, Wakayama', credit: 'Susann Schuster', url: 'https://unsplash.com/photos/EPH_IlA0Yx0', licence: U },
  'kamikochi': { src: kamikochi, alt: 'A clear river running through a green alpine valley', caption: 'Kamikochi, Nagano', credit: 'Joris Beugels', url: 'https://unsplash.com/photos/AZcuCaacyK0', licence: U },
  'shirakawago-snow': { src: shirakawagoSnow, alt: 'A thatched farmhouse in deep snow', caption: 'Shirakawa-go in winter, Gifu', credit: 'Hyungman Jeon', url: 'https://unsplash.com/photos/Q0qtvvV6jak', licence: U },
  'kyoto-pagoda': { src: kyotoPagoda, alt: 'A pagoda-roofed building reflected in a pond', caption: 'Temple pond, Kyoto Prefecture', credit: 'Erik Eastman', url: 'https://unsplash.com/photos/wJj5Bs1jHxg', licence: U },
  'kaiseki': { src: kaiseki, alt: 'A kaiseki meal of many small dishes', caption: 'Kaiseki dinner, Tokyo', credit: 'Yosuke Ota', url: 'https://unsplash.com/photos/xSHQF1rKaVE', licence: U },
  'okinawa': { src: okinawa, alt: 'Aerial view of turquoise sea and a forested shore', caption: 'Coast at Uruma, Okinawa', credit: 'Ryo Yoshitake', url: 'https://unsplash.com/photos/Fim4XEASDZc', licence: U },
  'daigoji': { src: daigoji, alt: 'A red temple hall and bridge over a pond among green trees', caption: 'Daigo-ji, Kyoto', credit: 'David Emrich', url: 'https://unsplash.com/photos/VCM99u6HltA', licence: U },
};

export const photo = (key) => {
  const p = PHOTOS[key];
  if (!p) throw new Error(`Unknown photo key "${key}" (see src/data/photos.mjs)`);
  return p;
};

// Season of each month, for month-page photos
export const SEASON_PHOTO = { 12: 'shirakawago-snow', 1: 'shirakawago-snow', 2: 'shirakawago-snow', 3: 'meguro-blossom', 4: 'meguro-blossom', 5: 'fuji-blossom', 6: 'daigoji', 7: 'kamikochi', 8: 'kamikochi', 9: 'autumn-maple', 10: 'autumn-maple', 11: 'autumn-maple' };

// Fallback photo per article category (used only when an article sets no image)
export const CATEGORY_PHOTO = { Walking: 'kumano', 'Rail and transport': 'shinkansen-station', Seasons: 'autumn-maple', Places: 'kyoto-pagoda', Practical: 'ryokan-room' };
