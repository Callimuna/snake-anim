input.onButtonPressed(Button.A, function () {
    for (let Index = 0; Index <= Schwanz.length / 2 - 1; Index++) {
        Schwanz[Index * 2].set(LedSpriteProperty.Brightness, 100)
        Schwanz[Index * 2 + 1].set(LedSpriteProperty.Brightness, 200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let Index = 0; Index <= Schwanz.length - 1; Index++) {
        Schwanz[Index].set(LedSpriteProperty.Brightness, 255)
    }
})
function bewegeSprite () {
    Sprite.move(1)
    if (Sprite.get(LedSpriteProperty.X) == 4 && Sprite.get(LedSpriteProperty.Y) == 2) {
        Sprite.turn(Direction.Left, 90)
    }
    if (Sprite.get(LedSpriteProperty.X) == 4 && Sprite.get(LedSpriteProperty.Y) == 0) {
        Sprite.turn(Direction.Left, 90)
    }
    if (Sprite.get(LedSpriteProperty.X) == 0 && Sprite.get(LedSpriteProperty.Y) == 0) {
        Sprite.turn(Direction.Left, 90)
    }
    if (Sprite.get(LedSpriteProperty.X) == 0 && Sprite.get(LedSpriteProperty.Y) == 4) {
        Sprite.turn(Direction.Left, 90)
    }
    if (Sprite.get(LedSpriteProperty.X) == 2 && Sprite.get(LedSpriteProperty.Y) == 4) {
        Sprite.turn(Direction.Left, 90)
    }
    if (Sprite.get(LedSpriteProperty.X) == 2 && Sprite.get(LedSpriteProperty.Y) == 2) {
        Sprite.turn(Direction.Right, 90)
    }
}
let Sprite: game.LedSprite = null
let Schwanz: game.LedSprite[] = []
let Kopf = game.createSprite(2, 2)
Schwanz = [game.createSprite(2, 3), game.createSprite(2, 4), game.createSprite(1, 4), game.createSprite(0, 4), game.createSprite(0, 3), game.createSprite(0, 2)]
Schwanz[0].turn(Direction.Left, 90)
Schwanz[1].turn(Direction.Left, 90)
Schwanz[4].turn(Direction.Right, 90)
Schwanz[5].turn(Direction.Right, 90)
basic.forever(function () {
    Sprite = Kopf
    bewegeSprite()
    for (let Index = 0; Index <= Schwanz.length - 1; Index++) {
        Sprite = Schwanz[Index]
        bewegeSprite()
    }
    basic.pause(1000)
})
