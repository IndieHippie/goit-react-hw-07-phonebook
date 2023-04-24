import { Label, Section, Input } from './Filter.module';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Section>
      <Label>Find contacts by Name</Label>
      <Input
        type="text"
        name="filter"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </Section>
  );
};

export default Filter;
