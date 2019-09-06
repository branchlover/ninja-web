import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ninjaType: string;
  constructor() {
    this.ninjaType = localStorage.getItem('token');
  }

  getNinja(){
    return this.ninjaType;
  }

  setNinjaType(value){
    this.ninjaType = value;
  }

  getNinjaData(type: string){
    switch(type){
      case 'Shinobi': 
      return of({
        info: 'The Asuka period (飛鳥時代 Asuka jidai) was a period in the history of Japan lasting from 538 to 710 (or 592 to 645), although its beginning could be said to overlap with the preceding Kofun period. The Yamato polity evolved greatly during the Asuka period, which is named after the Asuka region, about 25 km south of the modern city of Nara.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Asuka_dera_daibutsu.jpg'
      });
      case 'Ukami': 
      return of({
        info: 'The Nara period (奈良時代 Nara jidai) of the history of Japan covers the years from AD 710 to 794. Empress Genmei established the capital of Heijō-kyō (present-day Nara). Except for a five-year period (740–745), when the capital was briefly moved again, it remained the capital of Japanese civilization until Emperor Kanmu established a new capital, Nagaoka-kyō, in 784, before moving to Heian-kyō, modern Kyoto, a decade later in 794.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Suzakumon_Heijokyo1.jpg'
      });
      case 'Kanja': 
      return of({
        info: 'The Sengoku period (戦国時代 Sengoku Jidai, "Age of Warring States"; c. 1467 – c. 1600) is a period in Japanese history marked by social upheaval, political intrigue and near-constant military conflict. Japanese historians named it after the otherwise unrelated Warring States period in China. It was initiated by the Ōnin War, which collapsed the Japanese feudal system under the Ashikaga shogunate, and came to an end when the system was re-established under the Tokugawa shogunate by Tokugawa Ieyasu.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Sengoku_period_battle.jpg'
      })
      case 'Onmitsu': 
      return of({
        info: 'The Edo period (江戸時代 Edo jidai) or Tokugawa period (徳川時代) is the period between 1603 and 1868 in the history of Japan, when Japanese society was under the rule of the Tokugawa shogunate and the country\'s 300 regional daimyō. The period was characterized by economic growth, strict social order, isolationist foreign policies, a stable population, \"no more wars\", and popular enjoyment of arts and culture. The shogunate was officially established in Edo on March 24, 1603, by Tokugawa Ieyasu. The period came to an end with the Meiji Restoration on May 3, 1868, after the fall of Edo.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Tokugawa_Ieyasu2.JPG'
      })
      case 'Ninsha':
      return of({
        info: 'Taishō era (大正 Taishō) is a period in the history of Japan dating from 30 July 1912 to 25 December 1926, coinciding with the reign of the Emperor Taishō. The new emperor was a sickly man, which prompted the shift in political power from the old oligarchic group of elder statesmen (or genrō) to the Imperial Diet of Japan and the democratic parties. Thus, the era is considered the time of the liberal movement known as the "Taishō democracy" in Japan; it is usually distinguished from the preceding chaotic Meiji period and the following militaristic-driven first part of the Shōwa period.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Emperor_Taish%C5%8D%28cropped%29.jpg'
      })
    }
  }
}
