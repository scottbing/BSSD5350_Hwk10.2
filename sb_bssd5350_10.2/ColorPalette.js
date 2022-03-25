class ColorPalette {
  //private variables for modes
  //would be better as enumerator
  #COMPLEMENT = 0;
  #ANALOGUE = 1;
  #MONOCHROME =2;
  #SPLITCOMPLEMENT = 3;
  #TRIADIC = 4;
  
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
    this._col1 = color(round(hue(this.baseColor) + 180) % 360, 75, 75); 
    //this._col2 = this._col1; //only one complement
   }

   findMonochromes() {
    this.#mode = this.#MONOCHROME; 
    this._col1 = color(hue(this.baseColor), 100, 50); 
    this._col2 = color(hue(this.baseColor), 50, 100);
   }

   findAnalogues() {
     this.#mode = this.#ANALOGUE; 
    this._col1 = color(round(hue(this.baseColor) + 30) %360, 100, 100); 
    this._col2 = color(abs(round(hue(this.baseColor) - 30)) %360, 100, 100); 
   }

   findSplitComplementC() {
     this.#mode = this.#SPLITCOMPLEMENT;
     let compl = round(hue(this.baseColor) + 180) % 360
     this._col1 = color(round(compl + 30) % 360, 100, 100); 
     this._col2 = color(abs(round(compl - 30)) % 360, 100, 100);
   }

}

