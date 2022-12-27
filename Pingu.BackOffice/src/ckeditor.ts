import * as UploadAdapterPlugin from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import * as AutoformatPlugin from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import * as BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import * as ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import * as BlockQuotePlugin from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import * as EasyImagePlugin from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import * as ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import * as EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import * as HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
import * as ImagePlugin from "@ckeditor/ckeditor5-image/src/image";
import * as ImageCaptionPlugin from "@ckeditor/ckeditor5-image/src/imagecaption";
import * as ImageStylePlugin from "@ckeditor/ckeditor5-image/src/imagestyle";
import * as ImageToolbarPlugin from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import * as ImageUploadPlugin from "@ckeditor/ckeditor5-image/src/imageupload";
import * as LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import * as ListPlugin from "@ckeditor/ckeditor5-list/src/list";
import * as ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";


export default class ClassicEditor extends ClassicEditorBase { }

ClassicEditor["builtinPlugins"] = [
  EssentialsPlugin,
  UploadAdapterPlugin,
  AutoformatPlugin,
  BoldPlugin,
  ItalicPlugin,
  BlockQuotePlugin,
  EasyImagePlugin,
  HeadingPlugin,
  ImagePlugin,
  ImageCaptionPlugin,
  ImageStylePlugin,
  ImageToolbarPlugin,
  ImageUploadPlugin,
  LinkPlugin,
  ListPlugin,
  ParagraphPlugin
];

ClassicEditor["defaultConfig"] = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'uploadImage',
      'blockQuote',
      'undo',
      'redo'
    ]
  },
  image: {
    toolbar: [
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'toggleImageCaption',
      'imageTextAlternative'
    ]
  },
  language: 'es'
};

