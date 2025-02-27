import { renderHook } from '@testing-library/react-hooks'

import { useGetCurrentCheckout } from './useGetCurrentCheckout'
import { checkoutMock } from '@/__mocks__/stories'
import { createQueryClientWrapper } from '@/__test__/utils/renderWithQueryClient'

describe('[hooks] MultiShip useCheckoutQueries', () => {
  it('should return multiShip checkout details when user provides valid checkoutId', async () => {
    const checkoutId = '137a979305c65d00010800230000678b'
    const { result, waitFor } = renderHook(
      () => useGetCurrentCheckout({ checkoutId, isMultiShip: true }),
      {
        wrapper: createQueryClientWrapper(),
      }
    )
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toStrictEqual(checkoutMock.checkout)
  })
})
