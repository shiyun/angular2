import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService{
  getHeros(){
    return Promise.resolve(HEROS);
  }
  getHerosSlowly(){
    return new Promise<Hero[]>(resolve=>{
      resolve(HEROS);
      //setTimeout(()=>resolve(HEROS), 500);
    });
  }
  getHero(id: number){
    return Promise.resolve(HEROS).then(heros=>heros.filter(hero=>hero.id === id)[0])
  }
  getPro(id: number, sid: number){
    return Promise.resolve(HEROS).then(heros=>{
      let r1 = heros.filter(hero=>hero.id === id)[0].product;      
      let r2 = r1.filter(result=>result.id===sid)[0];
      console.log(`select result: ${JSON.stringify(r2)}`);
      return r2;
    })
  }
}