function spilitText() {
    var tl = new TimelineLite,
        mySplitText = new SplitText($(this.target), {type:"words,chars"}),
        chars = mySplitText.chars; //an array of al
    TweenLite.set($(this.target), {perspective:400});
    tl.staggerFrom(chars,0.8, { autoAlpha:0,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02);
}

function spilitTextChars() {
    var tl = new TimelineLite,
        mySplitText = new SplitText($(this.target), {type:"words,chars"});

    $(mySplitText.words).each(function(index,el){
        tl.from($(el), 0.6, {opacity:0, force3D:true}, index * 0.01);
        tl.from($(el), 0.6, {scale:index % 2 == 0  ? 0 : 2, ease:Back.easeOut}, index * 0.01);
    });
}

function spilitTextWordsLine() {
    var tl = new TimelineLite,
        mySplitText = new SplitText($(this.target), {type:"chars, words, lines"});
    tl.staggerFrom(mySplitText.chars, 0.2, {autoAlpha:0, scale:4, force3D:true}, 0.01, 0.5)
        .staggerTo(mySplitText.words, 0.1, {color:"#8FE402", scale:0.9}, 0.1, "words")
        .staggerTo(mySplitText.words, 0.2, {color:"white", scale:1}, 0.1, "words+=0.1");
}

function spilitTextLines() {
    var tl = new TimelineLite,
        mySplitText = new SplitText($(this.target), {type:"lines"});

    tl.staggerFrom(mySplitText.lines, 0.5, {opacity:0, rotationX:-120, force3D:true, transformOrigin:"top center -150"}, 0.1);
}
