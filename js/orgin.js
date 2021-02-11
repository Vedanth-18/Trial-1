class Orgin{
    constructor(body1, point2){
        var options={
            bodyA: body1,
            pointB: point2,
            stiffness: 0.4,
            length: 2
        }
        this.orgin = Matter.Constraint.create(options);
        World.add(world, this.orgin);
    }
}