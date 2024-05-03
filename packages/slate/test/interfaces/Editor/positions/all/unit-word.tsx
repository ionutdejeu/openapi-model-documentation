/** @jsx jsx */
import { Editor } from 'slate'
import { jsx } from '../../../..'

export const input = (
  <editor>
    <block>one two three</block>
    <block>four five six</block>
  </editor>
)
export const test = editor => {
  return Array.from(Editor.positions(editor, { at: [], unit: 'word' }))
}
export const output = [
  { path: [0, 0], offset: 0 },
  { path: [0, 0], offset: 3 },
  { path: [0, 0], offset: 7 },
  { path: [0, 0], offset: 13 },
  { path: [1, 0], offset: 0 },
  { path: [1, 0], offset: 4 },
  { path: [1, 0], offset: 9 },
  { path: [1, 0], offset: 13 },
]
