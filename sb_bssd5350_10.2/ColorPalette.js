class ColorPalette (
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
    this._col1 = color(hue(this.baseColor) + 180, 75, 75); 
    this._col2 = thiss_col1; //only one complement
   }

   findMonochromes() {
    this_col1 = color(hue(this.baseColor), 75, 75); 
    this._col2 = color(hue(this.baseColor), 50, 50);
   }

   findAnalogues() {
    this._coll = color(hue(this.baseColor) + 50, 100, 100); 
    this. col2 = color(hue(this.baseColor) - 50, 100, 100);
   }
}

