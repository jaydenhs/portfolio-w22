export default function GetExtension(src) {
  var re = /(?:\.([^.]+))?$/;
  var extension = re.exec(`${src}`)[1];

  return extension;
}
