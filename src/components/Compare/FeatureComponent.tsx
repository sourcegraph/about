import { FunctionComponent, useState } from 'react'

import { MdCheck, MdClose } from 'react-icons/md'

export const FeatureComponent: FunctionComponent<{ item: any }> = (item: any) => {
  const data = item.item
  const [showFeatureDetails, setShowFeatureDetails] = useState(data.view_feature_details)
  const [showCodyDetails, setShowCodyDetails] = useState(data.view_feature_details)
  const [showCompetitorDetails, setShowCompetitorDetails] = useState(data.view_feature_details)
  const toggleFeatureDetails = (): void => setShowFeatureDetails(!showFeatureDetails)
  const toggleCodyDetails = (): void => setShowCodyDetails(!showCodyDetails)
  const toggleCompetitorDetails = (): void => setShowCompetitorDetails(!showCompetitorDetails)

  return (
      <tr>
          <td className="w-1/2">
              {data.feature}

              {data.feature_details && data.feature_details.length > 0 && (
                  <button type="button" className="ml-2 text-xs" onClick={() => toggleFeatureDetails()}>
                      ⓘ
                  </button>
              )}

              {showFeatureDetails && <p className="text-xs">{data.feature_details}</p>}
          </td>

          <td className="relative w-1/4 text-center">
              {/* check or x */}
              {data.cody === true && (
                  <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-blurple-100/40">
                      <MdCheck className="h-6 w-6 fill-blurple-400" />
                  </span>
              )} 
              
              {data.cody === false && (
                  <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                      <MdClose className="h-6 w-6 fill-gray-500" />
                  </span>
              )}

              {data.cody.length > 0 && (
                  <span className="mx-auto">
                  {data.cody}
              </span>
              )}

              {data.cody_details && data.cody_details.length > 0 && (
                  <button type="button" className="absolute ml-2 mt-1" onClick={() => toggleCodyDetails()}>
                      ⓘ
                  </button>
              )}

              {showCodyDetails &&
                  Array.isArray(data.cody_details) &&
                  data.cody_details.map((item: any, index: number) => (
                      <div key={index}>
                          {item}
                      </div>
                  ))}

              {showCodyDetails && !Array.isArray(data.cody_details) && <p>{data.cody_details}</p>}
          </td>

          <td className="relative w-1/4 text-center">
              {/* check or x */}
              {data.competitor === true && (
                  <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-blurple-100/40">
                      <MdCheck className="h-6 w-6 fill-blurple-400" />
                  </span>
              )} 
              
              {data.competitor === false && (
                  <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                      <MdClose className="h-6 w-6 fill-gray-500" />
                  </span>
              )}

              {data.competitor.length > 0 && (
                  <span className="mx-auto">
                  {data.competitor}
              </span>
              )}

              {data.competitor_details && data.competitor_details.length > 0 && (
                  <button type="button" className="absolute ml-2 mt-1" onClick={() => toggleCompetitorDetails()}>
                      ⓘ
                  </button>
              )}
              {showCompetitorDetails && <p>{data.competitor_details}</p>}
          </td>
      </tr>
  )
}
