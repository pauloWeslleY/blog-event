import { FirebaseApp, initializeApp } from 'firebase/app'
import { IFirebaseConfig } from '@/data/firebase'

export class RemoteFirebaseApp implements IFirebaseConfig {
  private apiKey = 'AIzaSyAWD8p7jR51r7GdU6jBHlpXVe2zIgPaMks'
  private authDomain = 'blog-events.firebaseapp.com'
  private projectId = 'blog-events'
  private storageBucket = 'blog-events.appspot.com'
  private messagingSenderId = '690354104970'
  private appId = '1:690354104970:web:d6ef440193add57be25b73'

  constructor() {
    this.initializeApp()
  }

  initializeApp(): FirebaseApp {
    const app = initializeApp({
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId,
      appId: this.appId,
    })
    return app
  }
}
