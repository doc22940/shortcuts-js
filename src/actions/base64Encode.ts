import { withActionOutput } from '../utils';

import WFBase64LineBreakMode from '../interfaces/WF/WFBase64LineBreakMode';
import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Base 64 Encode Action. Base 64-encode content.
 *
 * ```js
 * base64Encode({
 *   'address': 'External',
 *   'type': 'IPv4',
 * });
 * ```
 */
const base64Encode = (
  options: {
    /** The encoding mode to use */
    encodeMode?: WFEncodeMode,

    /** The line break mode to use */
    lineBreakMode?: WFSerialization | WFBase64LineBreakMode,
  },
): WFWorkflowAction => {
  const {
    encodeMode = 'Encode',
    lineBreakMode = 'Every 76 Characters',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
    WFWorkflowActionParameters: {
      WFEncodeMode: encodeMode,
      WFBase64LineBreakMode: lineBreakMode,
    },
  };
};

export default withActionOutput(base64Encode);
