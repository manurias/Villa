class pikomon
{
  constructor(n, v, a)
  {
    this.imagine = new Image();
    this.nome = n;
    this.vità = v;
    this.attacco = a;
    
    this.imagine.src = imagini[this.nome];
  }
  parlare()
  {
    alert(this.nome);
 } 
  mostrare()
  {
    document.body.appendChild(this.imagine);
    document.write("<br /><strong>" +
  this.nome + </strong><br />");
    document.write("vità: " + this.vità + "<br />);
    document.write("attacco: " + this.attacco + "<hr />");
  }
}
 
