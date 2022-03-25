class ColorPalette {
  //private variables for modes
  //would be better as enumerator
  #COMPLEMENT = 0;
  #ANALOGUE = 1;
  #MONOCHROME =2;
  #SPLITCOMPLEMENT = 3;
  #TRIADIC = 4;
  
  #monochromes = []
  #analogue = []
  #spitcomplements = []
  #complement = []
  #triads = []
  
  #mode = null //private variable
  
   constructor(inputColor = undefined) {
    colorMode(HSB, 360, 100, 100, 100);

    if (inputColor == undefined) {
     inputColor = round(random(360));
    }
    this.baseColor = color(inputColor, 100, 100, 100);
   }

   get col1() {
     return this._col1;
     }
   get col2() {
     return this._col2;
   }

   findComplement() {
    this.#mode = this.#COMPLEMENT; 
    this._col1 = color(round(hue(this.baseColor) + 180) % 360, 100, 100); 
    this._col2 = this._col1; //only one complement
   }

   findMonochromes() {
    this.#mode = this.#MONOCHROME; 
    this._col1 = color(hue(this.baseColor), 100, 50); 
    this._col2 = color(hue(this.baseColor), 50, 100);
   }

   findAnalogues() {
   this.#mode = this.#ANALOGUE;
   this._col1 = color((hue(this.baseColor) + 50) % 360, 100, 100);
   let hcolor = round(hue(this.baseColor) - 50);
   if(hcolor < 0){
    hcolor = round(360+hcolor);
   }
   this._col2 = color(hcolor % 360, 100, 100);
  }

   findSplitComplement() {
     this.#mode = this.#SPLITCOMPLEMENT;
     let compl = round(hue(this.baseColor) + 180) % 360; 
     this._col1 = color((compl + 30) % 360, 100, 100); 
     let hcolor = round(compl - 30);
     if(hcolor < 0){
     hcolor = round(360+hcolor);
   }
   this._col2 = color(hcolor % 360, 100, 100);
  }

  findTriads() {
   this.#mode = this.#TRIADIC; 
   this._col1 = color(round(hue(this.baseColor) + 120) % 360, 100, 100); 
   let hcolor = round(hue(this.baseColor) - 120);
   if(hcolor < 0){
    hcolor = round(360+hcolor);
   }  
   this._col2 = color(hcolor % 360, 100, 100);
   }
}