class ColorPalette {
  //private variables for modes
  //would be better as enumerator
  
  #COMPLEMENT = 0;
  #ANALOGUE = 1;
  #MONOCHROME =2;
  #SPLITCOMPLEMENT = 3;
  #TRIADIC = 4;
  
  #monochromes = []
  #analogues = []
  #spitcomplements = []
  #complements = []
  #triads = []
  
  #mode = null //private variable
  
   constructor(inputColor = undefined) {
    colorMode(HSB, 360, 100, 100, 100);

    if (inputColor == undefined) {
     inputColor = round(random(360));
    }
    this.baseColor = color(inputColor, 100, 100, 100);
   }

   get monochromes1() {
     return this.#monochromes[0];
   }

   get monochromes2() {
     return this.#monochromes[1];
   }

   get analogues1() {
     return this.#analogues[0];
   }

   get analogues2() {
     return this.#analogues[1];
   }
   
   get complements1() {
      return this.#complements[0];
   }
   
   get complements2() {
      return this.#complements[1];
   }

   findComplements() {
    this.#mode = this.#COMPLEMENT; 
    this.#complements[0] = color(round(hue(this.baseColor) + 180) % 360, 100, 100); 
    this.#complements[1] = this._col1; //only one complements
   }

   findMonochromes() {
    this.#mode = this.#MONOCHROME; 
    this.#monochromes[0] = color(hue(this.baseColor), 100, 50); 
    this.#monochromes[1] = color(hue(this.baseColor), 50, 100);
   }

   findAnalogues() {
   this.#mode = this.#ANALOGUE;
   this.#analogues[0] = color((hue(this.baseColor) + 50) % 360, 100, 100);
   let hcolor = round(hue(this.baseColor) - 50);
   if(hcolor < 0){
    hcolor = round(360+hcolor);
   }
   this.#analogues[1] = color(hcolor % 360, 100, 100);
   }

   findSplitComplements() {
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

   //not getters. getters cannot accept parameters
  getRandomHue() {
     return color(round(random(360), 100, 100));
  }

  //get from any color but if none given assumes current palette
  getRandomTint(inputColor = undefined) {
     if (inputColor == undefined) {
      inputColor = this.baseColor;
     }
     return color(
      hue(inputColor),
      round(random(10, 100)),
      brightness(inputColor)
     );
  }

  //get from any color but if none given assumes current palette
  getRandomShade(inputColor = undefined) {
     if (inputColor == undefined) {
      inputColor = this.baseColor;
     }
     return color(
        hue(inputColor),
        saturation(inputColor),
        round(random(10, 100))
        );
  }
}