import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../store/store';

export default () => useDispatch<AppDispatch>();
