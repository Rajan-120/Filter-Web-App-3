nose_x = "";
nose_y = "";

function preload()
{
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup()
{
    canvas = createCanvas(350, 300);
    canvas.position(505, 325);
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', poseResults);
}

function draw()
{
    image(video,0,0,400,300);
    image(lipstick, nose_x - 25, nose_y + 10, 50, 40);
}

function take_snapshot()
{
    save("Filtered Image.png");
}

function modelLoaded()
{
    console.log("Model loaded successfully");
}

function poseResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log(nose_x);
        console.log(nose_y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}