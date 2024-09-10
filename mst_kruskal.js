class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

function kruskal(n, edges) {
    const ds = new DisjointSet(n);
    const mst = [];

    edges.sort((a, b) => a.weight - b.weight);

    for (const edge of edges) {
        const { u, v, weight } = edge;
        if (ds.find(u) !== ds.find(v)) {
            ds.union(u, v);
            mst.push(edge);
        }
    }

    return mst;
}
