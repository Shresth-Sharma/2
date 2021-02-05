var product,productimage,productGroup;
var product1,product2,product3,product4,product5,product6,product7,product8,product9;
var up,down,background1;
function preload(){
productimage=loadImage("productImage.png");
productimage1=loadImage("productImage1.png");
productimage2=loadImage("productImage2.png");
productimage3=loadImage("productImage3.png");
productimage4=loadImage("productImage4.png");
productimage5=loadImage("productImage5.png");
productimage6=loadImage("productImage6.png");
productimage7=loadImage("productImage7.png");
productimage8=loadImage("productImage8.png");
productimage9=loadImage("productImage9.png");
}
function setup(){
createCanvas(900,1200);

productGroup=createGroup();


product = createSprite(450,53.8,10,10);
product.addImage("productimage",productimage);
product.scale=0.3333
productGroup.add(product);

product1 = createSprite(450,161.4,10,10);
product1.addImage("productimage",productimage1);
product1.scale=0.3333
productGroup.add(product1);

product2 = createSprite(450,269,10,10);
product2.addImage("productimage",productimage2);
product2.scale=0.3333
productGroup.add(product2);

product3 = createSprite(450,376.6,10,10);
product3.addImage("productimage",productimage3);
product3.scale=0.3333
productGroup.add(product3);

product4 = createSprite(450,485.2,10,10);
product4.addImage("productimage",productimage4);
product4.scale=0.3333
productGroup.add(product4);

product5 = createSprite(450,593.8,10,10);
product5.addImage("productimage",productimage5);
product5.scale=0.3333
productGroup.add(product5);

product6 = createSprite(450,701.4,10,10);
product6.addImage("productimage",productimage6);
product6.scale=0.3333
productGroup.add(product6);

product7 = createSprite(450,810,10,10);
product7.addImage("productimage",productimage7);
product7.scale=0.3333
productGroup.add(product7);

product8 = createSprite(450,918.6,10,10);
product8.addImage("productimage",productimage8);
product8.scale=0.3333
productGroup.add(product8);

product9 = createSprite(450,1026.2,10,10);
product9.addImage("productimage",productimage9);
product9.scale=0.3333
productGroup.add(product9);

background1 = createSprite(450,1100,900,200);
background1.shapeColor=("red")
down = createSprite(200,1100,180,180);
up = createSprite(700,1100,180,180);

}


function draw(){
    background("red");
    productGroup.setVelocityEach(0,0);
    if(mousePressedOver(down)){
    productGroup.setVelocityEach(0,3);
    }
    if(mousePressedOver(up)){
    productGroup.setVelocityEach(0,-3);
    }
    drawSprites();
}