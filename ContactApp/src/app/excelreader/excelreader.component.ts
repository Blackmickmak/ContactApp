import { Component, Input } from '@angular/core';

@Component({
  selector: 'excelreader-app',
  templateUrl: './excelreader.component.html'
})
export class ExcelReaderComponent {

  submit() {
    let element: any = document.getElementById("file"),
      file = element.files[0];
    if (file != null) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (readerEvt: any) {
        let value = readerEvt.target.result.match(/.(.*)$/)[1];
        console.log('File name is: '+ file.name + 'size: ' + file.size + ' value: ' + value);
      }
    }


  }
}
