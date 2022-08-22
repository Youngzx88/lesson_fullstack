function bsearch_1(l,r){
    while (l < r)
    {
        var mid = parseInt(l + r >> 1);
        if (check(mid)) r = mid;
        else l = mid + 1;
    }
    return l;
}

arr = [12,31,1,3,2,31,33,12,32,56,23];
