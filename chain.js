class Chain
{
    constructor(A,B)
    {
        var options =
        {
            bodyA: A,
            bodyB: B,
            length: 3,
            stiffness: 0.2
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain);
    }
    display()
    {
        var posA = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y)
    }
}