import authReducer from "../../reducers/auth";

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@InIT'});
    expect(state).toEqual({});
});

test('should login correctly', () => {
    const uid = 'udhhy66765';
    const action = {
       type: 'LOGIN',
       uid
   };

    const state = authReducer({},action);
    expect(state.uid).toEqual(action.uid);
});

test('should logout correctly', () => {
    const action = {
        type: 'LOGOUT',
    };

    const state = authReducer({ uid: 'ajhbdjkj' },action);
    expect(state).toEqual( {} );
});

