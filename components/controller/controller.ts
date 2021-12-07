import AppLoader from './appLoader';
import { Endpoints } from '../utils/Enums';
import { IData } from '../utils/IData';

class AppController extends AppLoader {
  getSources(callback: (data: IData) => void) {
    super.getResp(
      {
        endpoint: Endpoints.sources,
      },
      callback
    );
  }

  getNews(e: MouseEvent, callback: (data: IData) => void) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoints.everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
