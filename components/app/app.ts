import AppController from '../controller/controller';
import { IData } from '../utils/IData';
import { AppView } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    (document.querySelector('.sources') as HTMLElement).addEventListener(
      'click',
      (e: MouseEvent) =>
        this.controller.getNews(e, (data: IData) => this.view.drawNews(data))
    );
    this.controller.getSources((data: IData) => this.view.drawSources(data));
  }
}

export default App;
