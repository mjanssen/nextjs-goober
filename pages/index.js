import Link from 'next/link';
import Table from '../components/Table';

const div = (columns = 1, color = '#C295D8', height = 30) => (
  <div data-columns={columns} style={{ backgroundColor: color, height }} />
);

const p = (name, age, sex) => ({
  url: `/manage/customers/${name}`,
  name,
  age,
  sex,
});
const h = (label, selector) => ({ label, selector });

const heads = [h('Name', 'name'), h('Age', 'age'), h('Sex', 'sex')];
const data = [p('marnix', 26, 'm'), p('alice', 25, 'f')];

export default function Index() {
  return (
    <>
      <Table heads={heads} data={data} filter={['age']} />
      <Link href="/about">
        <a>About</a>
      </Link>
    </>
  );
}
