function collided(ibullet, iwall){
    bulletRightEdge=ibullet.x+ibullet.width;
    wallLeftEdge=iwall.x;
    if (bulletRightEdge>=wallLeftEdge){
        return true;
    }
    return false;
}