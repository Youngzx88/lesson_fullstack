var q = [4,2,1,6,7,3,0,12,3,2,3,4,2,4,323,4,22,312];
quick_sort(q,0,q.length-1);
console.log(q);
function quick_sort(q, l, r)
{
    if (l >= r) return;

    var i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j)
    {
        do i ++ ; while (q[i] < x);
        do j -- ; while (q[j] > x);
        if (i < j) {
            var temp;
            temp = q[i];
            q[j] = q[i];
            q[i] = temp
        };
    }
    quick_sort(q, l, j),
    quick_sort(q, j + 1, r);
}