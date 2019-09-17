import React from 'react'
import { SimpleComponent } from '../SimpleComponent';
import { withSomeData } from '../withSomeData';
import { withAsyncData } from '../withAsyncData';

export default withAsyncData(withSomeData(SimpleComponent));