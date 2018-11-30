let height = 15;
let width = 33;
let imageOrientation = function (height,width){

if (width>height) {
    return ' the image is landscape';
}

else { return ' the image is potrait'
}

};

let result = imageOrientation(19,15);
console.log(result);