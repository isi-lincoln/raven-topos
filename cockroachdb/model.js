let toponame = "cockroach"+Math.random().toString().substr(-6);

function server(name) {
	return {
		name: name,
		image: 'debian-buster',
		cpu: { cores: 2 },
		memory: { capacity: GB(4) },
		mounts: [{ source: env.PWD+'/certs', point: '/tmp/certs' }],
	};
}

function vertex(name) {
  return {
    name: name,
    image: 'cumulusvx-3.7-mvrf',
    cpu: { cores: 2 },
    memory: { capacity: GB(2) },
  };
}

//   ---s1----
//  /  /  \   \
// a   b   c   d
topo = {
	name: toponame,
	nodes: [
		server("a"),
		server("b"),
		server("c"),
		server("d"),
	],
	switches: [
		vertex("s1"),
	],
	links: [
		Link('a', 1, 's1', 1),
		Link('b', 1, 's1', 2),
		Link('c', 1, 's1', 3),
		Link('d', 1, 's1', 4),
	],
}
