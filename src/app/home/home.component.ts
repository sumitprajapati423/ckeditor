import { Component, OnInit } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


// public Editor = ClassicEditor;



// toolbarConfig = {
//   items: [
//     'undo', 'redo',
//         '|', 'heading',
//         '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
//         '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
//         '-', // break point
//         '|', 'alignment',
//         'link', 'uploadImage', 'blockQuote', 'codeBlock',
//         '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
//   ],
//   shouldNotGroupWhenFull: true
// } as any;


public Editor = DecoupledEditor;

public onReady( editor: DecoupledEditor ): void {
  const element = editor.ui.getEditableElement()!;
  const parent = element.parentElement!;

  parent.insertBefore(
    editor.ui.view.toolbar.element!,
    element
  );
}


// ------------------------background image change

 imageUrl2:any
 changeImg2(event:any){
   let file = event.target.files[0]
   console.log(event,file)

   // base64 format -- file
   let fileRead = new FileReader()
   fileRead.readAsDataURL(file)
   fileRead.onload = ()=>{
     this.imageUrl2 = fileRead.result
     console.log(this.imgPath)
   }
 }




// background:string='../../assets/ai-generated-8548348_1280.webp'








// ----------------------------------------


  // public editorData: string = '<p>Hello, CKEditor!</p>';
  // public config = {
  //   // CKEditor config options
  //   toolbar: [
  //     { name: 'document', items: ['Source', '-', 'NewPage', 'Preview', '-', 'Templates'] },
  //     { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
  //     { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
  //     { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
  //     '/',
  //     { name: 'styles', items: ['Styles', 'Format'] },
  //     { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'] },
  //     { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Blockquote'] },
  //     { name: 'links', items: ['Link', 'Unlink'] },
  //     { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
  //     { name: 'others', items: ['-'] },
  //     { name: 'about', items: ['About'] }
  //   ],
  //   removeButtons: 'Underline,Subscript,Superscript',
  //   height: '400px',
  //   width: '100%',
  //   extraPlugins: 'justify,indentblock',
  //   resize_enabled: false,
  //   removePlugins: 'elementspath'
  // };


// -------------------Image Upload-----
  imgPath:any
  changeImg(event:any){
    let file = event.target.files[0]
    console.log(event,file)

    // base64 format -- file
    let fileRead = new FileReader()
    fileRead.readAsDataURL(file)
    fileRead.onload = ()=>{
      this.imgPath = fileRead.result
      console.log(this.imgPath)
    }
  }



// ----------------------fatch Value
  value : any= "sumit";
  dic :number=0;
  inputData:number=0;
  textdata: string="";
  ckdata:string='';


  showInput: boolean = false;

  toggleInput() {
    this.showInput = !this.showInput;
  }


  showInputck: boolean = false;

  toggleInput2() {
    this.showInputck = !this.showInputck;
  }


  // Axis(event:any){
  //   console.log(event);
  // }

  // x:number = 200
  // y:number = 200

  // ------------------------------------------------

  // screenshotAndShare() {
  //   const captureElement = document.getElementById('capture');
  //   const additionalText = this.captionText ? `${this.captionText}\n\nCheck out this information from ALPHA EDUCATION CENTER!` : 'Check out this information from ALPHA EDUCATION CENTER!';

  //   if (captureElement) {
  //     html2canvas(captureElement).then(canvas => {
  //       canvas.toBlob(blob => {
  //         if (blob) {
  //           const file = new File([blob], 'screenshot.png', { type: 'image/png' });

  //           if (navigator.share) {
  //             navigator.share({
  //               files: [file],
  //               title: 'Screenshot',
  //               text: additionalText
  //             }).catch(error => console.error('Error sharing', error));
  //           } else {
  //             console.error('Share not supported');
  //           }
  //         } else {
  //           console.error('Blob is null');
  //         }
  //       });
  //     });
  //   }
  // }

  // --------------Text Messgae Send------------------------------------

  formData: any = {};
  Summary: string = '';
  email: string = '';
  message: string = '';
  Source:  string ='';

  submitForm() {
    console.log('Name:', this.Summary);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    console.log('Source:', this.Source);
  }
  captionText: string = '';

// --------------Screenshot----
  screenshot() {
    const captureElement = document.getElementById('capture');
    if (captureElement) {
      html2canvas(captureElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'screenshot.png';
        link.click();
      });
    }}


    // -----------------Share Button --------------

  constructor(private http: HttpClient) { }

  imageUrl: string = 'https://i.ibb.co/jR70VKs/screenshot-12.png[/img';

  captureAndShare(): void {
    const captureElement = document.getElementById('capture');

    if (captureElement) {
      html2canvas(captureElement).then(canvas => {
        const imageDataURL = canvas.toDataURL('image/png');


        const httpImageUrl = this.imageUrl.startsWith('http') ? this.imageUrl : `http://${this.imageUrl}`;


        // Share on various platforms
        this.shareOnFacebook(httpImageUrl);
        this.shareOnTwitter(httpImageUrl);
        this.shareOnLinkedIn(httpImageUrl);
        // this.shareOnWhatsApp(httpImageUrl);
        this.shareOnTelegram(httpImageUrl);
        this.shareViaEmail(httpImageUrl);
      });
    }
  }


  shareOnFacebook(httpImageUrl: string): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${this.imageUrl}`;
    this.openWindowSafely(url);
  }

  shareOnTwitter(httpImageUrl: string): void {
    const url = `https://twitter.com/intent/tweet?url=${this.imageUrl}&text=${this.message}`;
    this.openWindowSafely(url);
    console.log(url);

  }

  shareOnLinkedIn(imageDataURL: string): void {
    const url = `https://www.linkedin.com/shareArticle?&url=${this.imageUrl}&text=${this.message}&summary=${this.Summary}&source=${this.Source}`;
      this.openWindowSafely(url);
  }

//   shareOnWhatsApp(imageDataURL: string): void {
//     const url = `https://api.whatsapp.com/send?&text=${this.message}%20${encodeURIComponent(this.imageUrl)}`;
//   this.openWindowSafely(url);

// }


// -------------------------------
// async shareOnWhatsApp(imageDataURL: string) {
//   const shareText = 'Check out this awesome content!';
//   const shareUrl = 'https://yourwebsite.com/awesome-content';
//   const whatsappUrl = `https://api.whatsapp://send?text=${encodeURIComponent(this.message)}%20${encodeURIComponent(this.imageUrl)}`;

//   try {
//     await navigator.share({
//       files:[],
//       title: 'Share on WhatsApp',
//       url: whatsappUrl,
//     });
//   } catch (error) {
//     console.error('Error sharing on WhatsApp:', error);
//   }
// }


shareOnWhatsApp(){
  const captureElement = document.getElementById('capture');

  if(captureElement){
    html2canvas(captureElement).then(canvas =>{
      canvas.toBlob(blob=>{
        if (navigator.share && blob){
          const file = new File([blob],'screenshot.png',{type:'image/png'});
          navigator.share({
            files:[file],
            text:`${this.message}`,
            title:'screenshot'
          }).catch(error=>console.error('error sharing',error))
        }else{
          console.error('share not supported or blob is null')
        }
      })
    })
  }
}




// ----------------------------

  shareOnTelegram(imageDataURL: string): void {
    const url =`https://t.me/share/url?url=${this.imageUrl}&text=${this.message}`;
    this.openWindowSafely(url);
    console.log(url);

  }

  shareViaEmail(imageDataURL: string): void {
    const url =`mailto:${this.email}?&subject=${this.message}&body=${this.imageUrl}`;
    // mailto:{@YourCustomerEmailID}?&subject={@YourEmailSubject}&body={@YourImageURL}
    // const url = `https://mail.google.com/mail/?to=sumitprajapati33663366@gmail.com?&subject=${this.imageUrl}&body=${this.message}`;
    // const url= `https://mail.google.com/mail/?view=cm&fs=1&to=sumitprajapati33663366@gmail.com&su=${this.message}&body=${this.imageUrl}&bcc=`
    this.openWindowSafely(url);
    console.log(url);

  }

  openWindowSafely(url: string): void {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      alert('Popup blocked. Please allow popups for this site.');
    }
  }


}
