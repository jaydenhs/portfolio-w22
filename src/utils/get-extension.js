export default function GetExtension(src) {
  console.log({ src });

  var re = /(?:\.([^.]+))?$/;
  var extension = re.exec(`${src}`)[1];

  return extension;
}
