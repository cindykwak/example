document.addEventListener('DOMContentLoaded', () => {
    const clothingImage = document.getElementById('clothing');
    const applyTextureButton = document.getElementById('applyTexture');
    const textureCanvas = document.getElementById('textureCanvas');
    const ctx = textureCanvas.getContext('2d');

    const textureImage = new Image();
    textureImage.src = '1.png'; 

    textureImage.onload = () => {

        textureCanvas.width = clothingImage.width;
        textureCanvas.height = clothingImage.height;

        applyTextureButton.addEventListener('click', () => {
            ctx.drawImage(clothingImage, 0, 0, clothingImage.width, clothingImage.height);
            ctx.globalCompositeOperation = 'multiply';
            ctx.drawImage(textureImage, 0, 0, clothingImage.width, clothingImage.height);

            // Clear the effect after applying
            ctx.globalCompositeOperation = 'source-over';
            clothingImage.src = textureCanvas.toDataURL();
        });

    };
});
