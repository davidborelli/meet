import {EventEmitter} from '@angular/core';
import {mergeScan} from 'rxjs/operator/mergeScan';

export class NotificationService {
  notifier = new EventEmitter<String>()

  notify(message: String){
    this.notifier.emit(message)
  }
}
