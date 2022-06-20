# 二分
## 整数二分
- 关键是看我们需要二分后的边界点mid属于左边还是右边，更新如果是l=mid，补+1，既（l+r+1）/2
- 版本1
    - 当我们将区间`[l, r]`划分成`[l, mid]`和`[mid + 1, r]`时，其更新操作是`r = mid`或者`l = mid + 1`;，计算`mid`时不需要加`1`
    ```js
    int bsearch_1(int l, int r)
    {
        while (l < r)
        {
            int mid = parseInt(l + r >> 1);
            if (check(mid)) r = mid;
            else l = mid + 1;
        }
        return l;
    }
    ```
- 版本2
    - 当我们将区间`[l, r]`划分成`[l, mid - 1]`和`[mid, r]`时，其更新操作是`r = mid - 1`或者`l = mid`;，此时为了防止死循环，计算`mid`时需要加`1`
    ```js
    int bsearch_2(int l, int r)
    {
        while (l < r)
        {
            int mid = parseInt(l + r + 1 >> 1);
            if (check(mid)) l = mid;
            else r = mid - 1;
        }
        return l;
    }
    ```